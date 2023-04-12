import React from 'react'
import style from '../Learmore/Learmore.module.css'

export default function () {
  return (
    <div className={style.container}>
        
        <strong className={style.strong} >Important:</strong> 
        <p className={style.parrafo}>This information is provided for informational purposes only. Given the pace at which the world continues to adapt, travel restrictions are changing rapidly. You should not rely exclusively on this tool and should confirm the accuracy of any information provided in it with official government guidance. The information in this tool is provided by a third party, Sherpa. Booking.com is not responsible for its accuracy or presentation. Neither Booking.com nor Sherpa is responsible for any translation that you or a third party (e.g. Google Translate) carry out on such information.</p>

<p className={style.parrafo2}>By using this tool, you acknowledge you have read this note and agree to our Terms & Conditions and Privacy & Cookie Statement (links below).
</p>

<strong className={style.strong}>Government travel restrictions and advisories</strong>
<p className={style.parrafo}> Please check for travel restrictions before booking and travelling to an accommodation. Travel may be permitted only for certain purposes and in particular, touristic travel may not be allowed. To help you on your way, we included publicly available links to government websites for several countries around the world. Please note that not all countries are covered below. If a country is not included in this overview it doesn’t mean that no travel restrictions are in place and we recommend that you seek out information for any country you are planning to travel to. We are not responsible for the content of the public (government) websites linked below. Government responses continue to evolve, so please check back often for updates and rely on your national and local government for the most current information.
        </p>
    </div>
  )
}
