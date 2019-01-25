import { Component } from '@angular/core'

@Component({
    selector : 'events-list',
    template: `
    <div>
        <h1>Upcomming Angular Events </h1>
        <hr/>
        <div class = "well hoverwell thumbnail" >
        <h2>{{event.name}}</h2>
        <div>{{event.date}}</div>
        <div>{{event.time}}</div>
        <div>Price: \${{event.price}}</div>
        </div>
    </div>
    `
})
export class  EventListComponent{
    event = {
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