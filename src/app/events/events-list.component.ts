import { Component } from '@angular/core'

@Component({
    selector : 'events-list',
    templateUrl: "./events-list.component.html"
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