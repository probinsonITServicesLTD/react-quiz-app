import React from 'react';
import Header from './components/Header';
import Quiz from './components/Quiz';
import Categories from './components/Categories';
import ModalWindow from './components/ModalWindow';



export default class App extends React.Component{    

    state = {
        showchatapp : true,
        question : '',
        options: [],
        quizId:'',
        isLoaded: false,
        answerRetrieved : false,
        answer:undefined,
        button0:false,
        button1:false,
        button2:false,
        button3:false,
        score: 0,
        questionCounter: 0,
        category: 'movies',
        questionsArray : [],
        currentQuizNumber: 0,
        showModal : false,
        showAnswer : false,
        subcat1:'80'
    }

    componentDidMount=()=>{
        this.getQuestion();
    }

    getQuestion=()=>{
        fetch(`https://quiz-rest-api.herokuapp.com/getQuizCollectionByCategory?category=${this.state.category}&subcat1=${this.state.subcat1}`)
        .then(res => res.json())
        .then((result) => {
              if(result.quiz){
                this.setState((previousState)=>{     
                    return{
                        questionsArray : result.quiz,
                        currentQuizNumber : 0
                    }                
                });
              }
          },(error) => {
            this.setState({
            //   isLoaded: true,
            //   error
            })
          }
        ).then(()=>{
            this.beginQuiz(this.state.currentQuizNumber);
        })
    }

    beginQuiz = (index)=>{
        let current = this.state.questionsArray[index];

        if(index >=this.state.questionsArray.length){
            //no more questions
            this.setState({     
               showModal: true             
            });
            return;
        }

        this.setState((previousState)=>{     
            return{
                options: current.options,
                question: current.question,
                quizId: current._id,
                isLoaded: true,    
                questionCounter: previousState.questionCounter + 1,
                answerRetrieved : false,
                answer:undefined,
                showAnswer: false,
                button0:false,
                button1:false,
                button2:false,
                button3:false,
            }                
        });
    }

    handleCheckAnswer=(element)=>{
        var newButtonState = {};
        var buttonId = element.target.getAttribute('data-button-id');
        if(!this.state.answerRetrieved){
            fetch("https://quiz-rest-api.herokuapp.com/getQuizAnswerById/"+this.state.quizId)
            .then(res => res.json())
            .then(
              (res) => {
                this.setState({
                    answer: res.answer,
                    answerRetrieved: true,
                    ['button'+res.answer]:true,
                 });
              },
              (error) => {
                this.setState({
                //   isLoaded: true,
                //   error
                });
              }
            ).then(()=>{
                if(this.state.answer.toString() == buttonId){
                    //right answer selected                  
                    this.setState((previousState)=>{
                        return{
                            score : previousState.score + 1,
                         }
                    });                   
                } 
                //show answer
                this.setState((previousState)=>{
                    return{
                       showAnswer : true,
                    }
                });  
            }).then(()=>{
                //pause for 2 seconds before next quiz
                setTimeout(()=> {  
                    this.setState((previousState)=>{     
                        return{
                            currentQuizNumber: previousState.currentQuizNumber + 1,
                        }                
                    });
                    this.beginQuiz(this.state.currentQuizNumber);
                }, 3000);
            })
        }
    }

    handleSetDecade=(element)=>{
        this.setState({
            subcat1: element.target.value,
            isLoaded:false,
            questionCounter:0,
            score: 0
         },()=>{
            this.getQuestion(); 
         })
    }

    handleSetMoviesOrTVShows=(element)=>{
        this.setState({
            category: element.target.value,
            isLoaded:false,
            questionCounter:0,
            score: 0
         },()=>{
            this.getQuestion(); 
         })
    }

    render(){
        return(
            <div>
                <Header title={'Welcome to the Movies and TV Shows Quiz App'}
                    score={this.state.score}
                    questionCounter={this.state.questionCounter}       
                    handleSetCategory={this.handleSetCategory}           
                    handleSetMoviesOrTVShows={this.handleSetMoviesOrTVShows}
                    handleSetDecade={this.handleSetDecade} 
                />
                <ModalWindow 
                    showModal={this.state.showModal}
                    questionCounter={this.state.questionCounter}
                    score={this.state.score}
                >
                </ModalWindow>
                <div className="row">
                    <div className="column">
                        <Quiz 
                            question={this.state.question}
                            options={this.state.options}
                            handleCheckAnswer={this.handleCheckAnswer}
                            quizId={this.state.quizId}
                            isLoaded={this.state.isLoaded}
                            button={[this.state.button0, this.state.button1, this.state.button2, this.state.button3]}
                            showAnswer={this.state.showAnswer}
                        />
                    </div>
                </div>
            </div>
        );
    }
}


