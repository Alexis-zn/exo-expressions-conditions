let password = '1a2b!AZEAZEAZEAZEAZEAZEAZ'

const crackme6 = (password) => {
  if(password.length > 13 && password[0,4] === '1', 'a', '2' ,'b', '!') {
    msg='OK'
  } else {
    msg='BAD'
  }
}
crackme6(password)
console.log(`${msg}`)