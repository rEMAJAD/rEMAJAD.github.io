import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

kaboom();

loadSprite("kartka", "kartka.png")
loadSprite("ludzik", "balwan.png")
loadSound("muzyka", "kolenda.mp3")

add([
  sprite("kartka")
])

const ludzik = add([
  sprite("ludzik"),
  pos(0,400)
])

let wprawo = true

onUpdate(()=>{

  if (wprawo && ludzik.pos.x < 1000){

    ludzik.pos.x += 10

        debug.log(wprawo)
  }

  else if(ludzik.pos.x == 1000 && wprawo){
    wprawo = false
    debug.log(wprawo)
  }

  else if(!wprawo && ludzik.pos.x > 0) {

      ludzik.pos.x -=10
  }

  else if(ludzik.pos.x == 0 && !wprawo)

    {
      wprawo = true
    }
})

onKeyRelease("space",()=>play("muzyka"))