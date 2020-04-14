$(function(){

    
    let output_code = $('#output_code')
    let output_console = $('#output_console')
    let lang_decide = $('#lang_decide')
    let code = editor.getValue()
    let input_output = $('#input_console')
     
    
   
    output_code.click(function(){
        code = editor.getValue()
        output_console.empty()
        if(lang_decide.html() === 'js'){
            $.post('/apiRoute/js' , {script : code , input : input_output.val()} , function(data){
                output_console.empty()
                
                output_console.append(data.output)
                
                output_console.append(data.cpuTime)
                
            })
        }
        else if(lang_decide.html() === 'py'){
            code = editor.getValue()
            console.log(input_output.val())
            output_code.click(function(){
                $.post('/apiRoute/py' , {script : code , input : input_output.val()} , function(data){
                   output_console.empty()
                   
                   output_console.append(data.output)
                   
                   output_console.append(data.cpuTime)
                   
               })
           })
        }
        else if(lang_decide.html() === 'rb'){
            code = editor.getValue()
            $.post('/apiRoute/rb' , {script : code , input : input_output.val()} , function(data){
                output_console.empty()
                
                output_console.append(data.output)
                
                output_console.append(data.cpuTime)
                
            })
        }
        else if(lang_decide.html() === 'php'){
            code = editor.getValue()
            $.post('/apiRoute/php' , {script : code , input : input_output.val()} , function(data){
                output_console.empty()
                
                output_console.append(data.output)
                
                output_console.append(data.cpuTime)
                
            })
        }

        else if(lang_decide.html() === 'java'){
            code = editor.getValue()
            $.post('/apiRoute/java' , {script : code , input : input_output.val()} , function(data){
                output_console.empty()
                
                output_console.append(data.output)
                
                output_console.append(data.cpuTime)
                
            })
        }

        else if(lang_decide.html() === 'c'){
            code = editor.getValue()
            $.post('/apiRoute/c' , {script : code , input : input_output.val()} , function(data){
                output_console.empty()
                
                output_console.append(data.output)
                
                output_console.append(data.cpuTime)
                
            })
        }

        

        else{
            code = editor.getValue()
            
            $.post('/apiRoute/csharp' , {script : code , input : input_output.val()} , function(data){
                output_console.empty()
                
                output_console.append(data.output)
                
                output_console.append(data.cpuTime)
                
            })
        }
    })
    



   

  

   
  
   
    
})