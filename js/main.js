var elList = document.querySelector('.list')
var elForm = document.querySelector('.form')
var elInp = document.querySelector('.inp')

var arr = ['jguli', 'jguli2', 'damas', 'nexia', 'cobalt', 'gentra', 'captiva', 'malibu', 'kia', 'kia sport', 'kia ka5', 'sonata', 'elantra', 'jip', 'lambargini', 'bugatti', 'mers', 'rols roys', 'audi', 'maskivich', 'tahhoe', 'tesla', 'geliy', 'chayka', 'ferrari', 'X6', 'x7', 'i8', 'cobalt2', 'cobalt3', 'cobalt4', 'nexia2', 'nexia3', 'captiva2', 'capptiva3', 'captiva4', 'traverse', 'treyblazer', 'hundai', 'kamaz', 'fura', 'daf', 'isuzi']


elForm.addEventListener('submit', (evn)=>{
    evn.preventDefault()
    var freeArr = []
    arr.forEach((e)=>{
        if(e.toString().toLowerCase().indexOf(elInp.value.trim().toString().toLowerCase()) != -1){
            freeArr.push(e)
            console.log('bor');
        }else{
            console.log('yoq');
        }
    })
    elList.innerHTML = ''
    freeArr.forEach((item)=>{
        var newli = document.createElement('li')
        newli.textContent = item
        elList.appendChild(newli)
        
    })

})



    
// elForm.addEventListener('submit', (e)=>{
//     e.preventDefault()
//     var val = elInp.value
//     arr.forEach((e)=>{
//         if(e.toString().toLowerCase().indexOf(val.toString().trim().toLowerCase()) != -1){
//             console.log('bor');
//         }else{
//             console.log('yoq');
//         }
//     })
// })
