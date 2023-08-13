import React, { useContext } from 'react'
import Header from './Header'
import NoteContext from '../Context/NoteCotext'

export default function Home() {

  let data = useContext(NoteContext);

  return (
    <>
    <Header title="Home Page" desc="this is Our MyNotes Homepage."/>
    {/* <h1>Name is :{data.state.name} and sallary is : {data.state.sallary}</h1> */}
    <p className='px-4 py-4' align="justify" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore consequatur consequuntur aspernatur non iure minima similique impedit magnam nesciunt culpa maiores ipsam iste, saepe beatae animi! Hic laborum ipsam, incidunt blanditiis voluptatum quasi maxime possimus perspiciatis iure veritatis, ducimus quia velit dicta officiis enim provident, dolor sint. Ullam itaque aliquid et maiores voluptatum, veritatis sequi accusantium non ex sapiente veniam numquam quaerat eaque error, perspiciatis exercitationem architecto, quae optio eius autem repellat fugiat inventore iure! Excepturi tempore possimus corporis officiis, quasi ea facilis quos libero expedita quaerat laboriosam ratione, suscipit magnam, ipsam nulla! Totam minima ipsa quod quasi sit repellat sint aut quae praesentium at iste deleniti obcaecati enim ea dolorem optio perspiciatis pariatur, ex tempore autem accusantium iure in quas? Explicabo ducimus delectus quo temporibus nobis laudantium recusandae libero ut sint, molestiae hic asperiores, vel deleniti corrupti reiciendis cupiditate magni. Labore nam illo nesciunt voluptatibus exercitationem mollitia aliquam commodi aspernatur recusandae minima! Provident aperiam ab vitae eos dolorem iure dignissimos illum ipsa sint dolor, corrupti cumque temporibus adipisci laborum? Incidunt totam, soluta voluptate et, itaque sunt doloribus voluptatem illum ea obcaecati expedita nobis veritatis ullam distinctio numquam quisquam alias eius deserunt! Animi nam a corrupti quam, nemo nisi voluptatum, totam quisquam suscipit minima quo ipsum? Nulla similique rerum molestiae cupiditate. Quia iure molestiae sed, labore voluptas repellat suscipit voluptate inventore nostrum fugit minus quis? Dolorem amet, corporis accusantium fuga explicabo aut. Assumenda beatae culpa deleniti minus perspiciatis sit exercitationem fuga a vel rerum unde aliquam, nemo maxime hic inventore corrupti explicabo nisi dolorum non quod optio aspernatur? Pariatur unde accusamus molestiae sapiente excepturi, provident natus, aperiam corrupti impedit laborum cumque! Tempora, repudiandae sed fugiat nam iure rerum, culpa nisi deleniti rem modi, voluptate sequi in earum optio architecto corporis quas. Quasi culpa at dignissimos accusantium deserunt expedita, quae quibusdam rem debitis porro eligendi aut eum maxime totam repudiandae a voluptatum. Recusandae nulla omnis mollitia distinctio molestiae, ut cum, aperiam enim amet aut corporis vel perferendis eum laudantium dolores! Cum ullam corrupti quasi maiores deserunt mollitia explicabo perferendis hic eius minus animi asperiores provident, sed ipsa beatae amet non commodi nisi iusto delectus accusantium nulla! At ipsum minus hic atque maiores optio, est vitae odit neque voluptates laboriosam similique qui! Tempora dolorem eveniet recusandae ex officia quam odit deleniti iste, ad perspiciatis eligendi consequatur repudiandae accusantium. Est, accusantium cum? Nemo ex pariatur illum rem magnam explicabo facere fugit dolore natus?</p>
    </>
  )
}
