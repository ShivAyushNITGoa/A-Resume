const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

const templateDirs = [
  path.join(__dirname, 'resume builder/templates'),
  path.join(__dirname, 'resume builder/components/templates')
];

// Add directories with potential image references
const imageDirs = [
  path.join(__dirname, 'resume builder/app'),
  path.join(__dirname, 'resume builder/components')
];

async function fixTemplateFiles() {
  try {
    console.log('Fixing template files...');
    
    // Fix template files for skills handling
    for (const dir of templateDirs) {
      if (!fs.existsSync(dir)) {
        console.log(`Directory doesn't exist: ${dir}`);
        continue;
      }
      
      const files = fs.readdirSync(dir).filter(file => file.endsWith('.tsx'));
      
      for (const file of files) {
        const filePath = path.join(dir, file);
        let content = await readFileAsync(filePath, 'utf-8');
        
        // Fix "skills.length" check
        if (content.includes('skills && skills.length')) {
          content = content.replace(
            /skills && skills\.length > 0 && \(/g, 
            'skills && ('
          );
          
          // Fix skills.map
          content = content.replace(
            /\{skills\.map\(\(skill, index\) => \(/g,
            '{skills.hard.map((skill, index) => ('
          );
          
          // Add soft skills section if there's a closing div after the skills mapping
          content = content.replace(
            /\}\)\)\}\s+<\/div>/g,
            '}))}' + 
            '{skills.soft.map((skill, index) => (' +
            '  <div key={`soft-${index}`} className="text-sm text-gray-700">{skill}</div>' +
            '))}' +
            '</div>'
          );
          
          await writeFileAsync(filePath, content, 'utf-8');
          console.log(`Fixed skills in: ${file}`);
        }
      }
    }
    
    // Fix image paths in all components and pages
    console.log('Fixing image paths...');
    for (const dir of [...templateDirs, ...imageDirs]) {
      if (!fs.existsSync(dir)) {
        console.log(`Directory doesn't exist: ${dir}`);
        continue;
      }
      
      await processDirectory(dir);
    }
    
    console.log('All files updated successfully!');
  } catch (error) {
    console.error('Error fixing files:', error);
  }
}

async function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const filePath = path.join(directory, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      await processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      await fixImagePaths(filePath);
    }
  }
}

async function fixImagePaths(filePath) {
  try {
    let content = await readFileAsync(filePath, 'utf-8');
    let modified = false;
    
    // Fix direct image paths
    if (content.includes('src="/images/')) {
      content = content.replace(
        /src="\/images\//g,
        'src={process.env.NODE_ENV === \'production\' ? \'/new-resume/images/\' : \'/images/'
      );
      content = content.replace(/src={process\.env\.NODE_ENV.*?\'/g, match => `${match}'}`);
      modified = true;
    }
    
    // Fix direct public paths
    if (content.includes('src="/public/')) {
      content = content.replace(
        /src="\/public\//g,
        'src={process.env.NODE_ENV === \'production\' ? \'/new-resume/public/\' : \'/public/'
      );
      content = content.replace(/src={process\.env\.NODE_ENV.*?\'/g, match => `${match}'}`);
      modified = true;
    }
    
    if (modified) {
      await writeFileAsync(filePath, content, 'utf-8');
      console.log(`Fixed image paths in: ${path.basename(filePath)}`);
    }
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error);
  }
}

fixTemplateFiles(); 