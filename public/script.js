// var aceEditor = window.ace.edit("editor")

// aceEditor.setOptions({
//     enableBasicAutocompletion: true, // the editor completes the statement when you hit Ctrl + Space
//     enableLiveAutocompletion: true, // the editor completes the statement while you are typing
//     showPrintMargin: false, // hides the vertical limiting strip
//     maxLines: Infinity,
//     fontSize: "100%" // ensures that the editor fits in the environment
//  });
//  // defines the style of the editor
//  aceEditor.setTheme("ace/theme/chrome");
//  // hides line numbers (widens the area occupied by error and warning messages)
//  aceEditor.renderer.setOption("showLineNumbers", false); 
//  // ensures proper autocomplete, validation and highlighting of JavaScript code
//  aceEditor.getSession().setMode("ace/mode/javascript_expression");


let js_navitem = document.getElementById('js_navitem')
let py_navitem = document.getElementById('py_navitem')
let rb_navitem = document.getElementById('rb_navitem')
let csharp_navitem = document.getElementById('csharp_navitem')
let php_navitem = document.getElementById('php_navitem')
let lang_decide = document.getElementById('lang_decide')
let save_code = document.getElementById('save_code')
let java_navitem = document.getElementById('java_navitem')
let c_navitem = document.getElementById('c_navitem')
let cpp_navitem = document.getElementById('cpp_navitem')

// save_code.onclick = function(){

//     editor.setValue("")
//     editor.setValue("")
//     var customPosition = {
//         row: 0,
//         column : 0
        
//     };
//     var text = `
//    ${editor.getValue()}
//     `;
    
//     editor.session.insert(customPosition , text);
// }

js_navitem.onclick = function(){
    editor.getSession().setMode("ace/mode/javascript");
    var customPosition = {
        row: 0,
        column : 0
        
    };
    
    editor.setValue("")
    var text = `
    function foo(items) {
        var x = "All this is syntax highlighted";
        return x;
      }
    console.log("Hello World1")
    `;
    
    editor.session.insert(customPosition , text);
    lang_decide.innerText = "js"
}

py_navitem.onclick = function(){
    editor.getSession().setMode("ace/mode/python");
    var customPosition = {
        row: 0,
        column: 0
    };
    editor.setValue("")
    var text = `
    ## Write the python code below
    `;
    
    editor.session.insert(customPosition , text);
    lang_decide.innerText = "py" 
}
rb_navitem.onclick = function(){
    editor.getSession().setMode("ace/mode/ruby");
    var customPosition = {
        row: 0,
        column: 0
    };
    editor.setValue("")
    var text = `
    class HelloWorld
        def initialize(name)
          @name = name.capitalize
        end
        def sayHi
          puts "Hello #{@name}!"
        end
    end

    hello = HelloWorld.new("World3")
    hello.sayHi
    `;
    
    editor.session.insert(customPosition , text);
    lang_decide.innerText = "rb"
}

php_navitem.onclick = function(){
    editor.getSession().setMode("ace/mode/php");
    var customPosition = {
        row: 0,
        column: 0
    };
    editor.setValue("")
    var text = `
    <?php
  echo "Hello World4!";
  echo "PHP is so easy!";
   ?>
    `;
    
    editor.session.insert(customPosition , text);
    lang_decide.innerText = "php"
}
    

csharp_navitem.onclick = function(){
    editor.getSession().setMode("ace/mode/csharp");
    var customPosition = {
        row: 0,
        column: 0
    };
    editor.setValue("")
    var text = `
    // C# program to print Hello World! 
    using System; 
      
    // namespace declaration 
    namespace HelloWorldApp { 
          
        // Class declaration 
        class Geeks { 
              
            // Main Method 
            static void Main(string[] args) { 
                  
                // statement 
                // printing Hello World! 
                Console.WriteLine("Hello World5!"); 
                  
                // To prevents the screen from  
                // running and closing quickly 
                Console.ReadKey(); 
            } 
        } 
    } 
    `;
    
    editor.session.insert(customPosition , text);
    lang_decide.innerText = "csharp"
}

java_navitem.onclick = function(){
    editor.getSession().setMode("ace/mode/java");
    var customPosition = {
        row: 0,
        column: 0
    };
    editor.setValue("")
    var text = `
    public class Fibonacci {
        public static void main(String[] args) {
            int n = 10, t1 = 0, t2 = 1;
            System.out.print("First " + n + " terms: ");
            for (int i = 1; i <= n; ++i)
            {
                System.out.print(t1 + " + ");
                int sum = t1 + t2;
                t1 = t2;
                t2 = sum;
            }
        }
    } 
    `;
    
    editor.session.insert(customPosition , text);
    lang_decide.innerText = "java"
}

c_navitem.onclick = function(){
    editor.getSession().setMode("ace/mode/c_cpp");
    var customPosition = {
        row: 0,
        column: 0
    };
    editor.setValue("")
    var text = `#include <stdio.h>
int main()
{
    int i, j, rows;
    printf("Enter number of rows: ");
    scanf("%d",&rows);
    for (int i=0 ; i<rows ; i++){
        printf("* ");
    
    }
    return 0;
    }
    `;
    
    editor.session.insert(customPosition , text);
    lang_decide.innerText = "c"
}


