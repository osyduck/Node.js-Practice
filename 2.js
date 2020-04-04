const arrayTest = [
    {
      name:'amin',
      role:'owner',
      error:'error field not allowed'
    },
    {
      name:'you',
      role:'member',
      error:'error field not allowed'
    },
    {
      name:'me',
      role:'member',
      error:'error field not allowed'
    }
    ]

newArr = []
arrayTest.map(x => {
    newArr.push({
        name: x.name,
        role: x.role
    })
})

console.log(newArr)
