<div id="top"></div>

<br />
<div align="center">
  <a href="https://infinity-devt.com">
    <img src="https://forum.cfx.re/uploads/default/optimized/4X/6/f/1/6f1ccd07f719240f0b7ab7994d14a81ef7621621_2_690x388.jpeg" alt="Warning Notification">
  </a>

  <h3 align="center">Car Wash</h3>

  <p align="center">
    <a href="http://infinity-devt.com">Visit Our Website</a>
    ·
    <a href="https://discord.gg/WRknrjMZAS">Join Our Discord</a>
    ·
    <a href="https://infinitydevelopment.tebex.io">Purchase Our Resources</a>
  </p>
</div>

## About This Resource

<a href="https://streamable.com/7eqkb2">Preview Resource</a>
    
This is very simple but useful resource for sending important warning notifications to your server's players.

It is nothing special, but still very useful.

How to use:
- SERVER SIDE - TriggerClientEvent('id_warningnotification:notify', source, message, duration)
- CLIENT SIDE - TriggerEvent('id_warningnotification:notify', message, duration)

* duration must be in milliseconds (1 second = 1000 milliseconds)

Example of usage:
- SERVER SIDE - TriggerClientEvent('id_warningnotification:notify', xPlayer.source, 'Test notification server side', 5000)
- CLIENT SIDE - TriggerEvent('id_warningnotification:notify', 'Test notification client side', 5000)
