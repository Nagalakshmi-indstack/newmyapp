
let fetchdata=()=>{
    fetch('https://1337-steep-tree-96465010.eu-ws3.runcode.io/newapi')
    .then((res)=>{
        return res.json()

    })
    .then ((res)=>{
        console.log(res)
    })
}
fetchdata()
let append=(data)=>{
    let container=document.getElementById('container')

    data.forEach((el)=>{
        let div=document.createEelement('div')
        let p=document.createEelement('h3')
        let h=document.createEelement('p')
        p.innerText=el.title;
        p1.innerText=el.body;

    })
}
