
    function Question(question,answer,correct){
        this.question=question;
        this.answer=answer;
        this.correct=correct;
        }
        Question.prototype.display=function(){
            console.log(this.question);
            for(var i=0;i<this.answer.length;i++){
               console.log(i+" "+this.answer[i]+" ");
            
            }
            
            }
        Question.prototype.check=function(ans,callback){
            var sc;

        if(ans===this.correct){
            
            console.log("right answer");
            sc = callback(true);  
        }else{ console.log("wrong answer");
        
     sc = callback(false);   

    }
        this.displayscore(sc);
        }
        Question.prototype.displayscore=function(score){
        console.log("your score is"+ score);


        }
      

        
        
        var q1=new Question("is JS is coolest progamming language",["yes","no"],0);
        var q2=new Question("what is your mentor name",["john","jonas","mike"],1);
        var q3=new Question("what does best describe coding",["boring","hard","fun"],2);
        
        
        
        
        
        
        
        var questions=[q1,q2,q3];

         function score(){
          var sc=0;
          return function(correct){
              if(correct){sc++;}
              return sc;
          }


         }
         var keepscore=score();




        function next(){
            var n= Math.floor(Math.random()*questions.length);
            questions[n].display();
            var ans= prompt("your answer");
           
            if(ans !== "exit"){
                questions[n].check(parseInt(ans),keepscore);
    
                next();
            }

        }
        
        next();











