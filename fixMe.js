let list = ['Alice', 'Bob', 'Charlie', 'Craig', 'Eve']

for (let j = 0; j < list.length; j++) {
  list[j]= list[j].toUpperCase()
  switch (list[j]) {
    case 'ALICE':
    console.log('Alice want to exchange with Bob') 
      break
    case 'BOB':
    console.log('Bob want to exchange with Alice') 
      break
    case 'CHARLIE':
    console.log('Charlie is a generic third participant')
      break
    case 'CRAIG':
    console.log('Craig is a password cracker')
      break
    case 'EVE':
    console.log('Eve is an eavesdropper')
      break
  }
}