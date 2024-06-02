let btn = document.querySelector("button")

btn.addEventListener("click",async ()=>{
    let  link = await getImages()
      

    let img =document.querySelector("#result")

    img.setAttribute("src",link);
})





let url = "https://dog.ceo/api/breeds/image/random";
async function getImages() {
    try {
       let res = await axios.get(url);
        return res.data.message;
    }
    catch(err){
        console.log("error is",err)
        return "No Images found";
    }
}