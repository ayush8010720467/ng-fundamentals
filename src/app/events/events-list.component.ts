import { Component  } from '@angular/core'

@Component({
    selector : 'events-list',
    template: `
    <div>
    <h1>Upcomming Angular Events </h1>
    <hr/>
    <div class = "well">
    <div>Hello world</div>
    </div>
    <event-thumbnail  [event] = "event1"></event-thumbnail>
    
</div>
    `,
    styles: [
        `
        .well div {color: 	#FFFF00 ;
        }
        `
    ]
})
export class  EventListComponent{
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '25/01/18',
        time: '03:09 am',
        price: 599.9,
        imageUrl:'../../assets/images/angularconnect-shield.png',
        location:{
            address: '975/5',
            city: 'Kanpur',
            country:'India'
        }
    }


}