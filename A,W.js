const Eating = true;
const Playing = false;
const Sleaping = true;



const eat = () =>{
    return new Promise((success, error)=> {

        if(Eating){
            success("eating");
        }else {
            error("not eating")
        }
    })
} 

const play = () => {
  return  new Promise((success, error)=> {
    
    if(Playing){
        success("playing");
    }else {
        error("not playing")
    }
})
}

const sleep = () => {
    return  new Promise((success, error)=> {

        if(Sleaping){
            success("sleeping");
        }else {
            error("not sleeping")
        }
    })
}




 const result = async () => {
  try {
     
    const eatMess = await eat(); // means sug ila data katimado then variable ka u dhiib 
    console.log(eatMess);
    const playMess = await play();
    console.log(playMess);
    const sleepMess = sleep();
    console.log(sleepMess);
  } catch (error) {
    console.log(error); // not plying is error wxi ka dambeyana lama sodawacayo 
  }
}
result();

