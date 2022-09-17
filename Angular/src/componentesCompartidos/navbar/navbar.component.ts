import { Location } from '@angular/common'
import { Component, HostListener} from '@angular/core'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  noEsLogin = () => this.location.path() !== '/login'

  @HostListener('window:resize')
  pantallaMobile(){
    return window.innerWidth < 401 
  }

  constructor(private location:Location){}

  
}

