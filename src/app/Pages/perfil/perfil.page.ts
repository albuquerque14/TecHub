import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  darkMode = false;


  constructor(private navCtrl: NavController) { }

  goToProdutosPage() {
    this.navCtrl.navigateForward('/produtos'); // Substitua pelo caminho real do seu perfil
  }

  departs() {
    this.navCtrl.navigateForward('/departamentos'); // Substitua pelo caminho real do seu perfil
  }


  ngOnInit():void {
    this.checkAppMode();  
  }

  checkAppMode(){

    const checkIsDarkMode = localStorage.getItem('darkModeActivated');
    checkIsDarkMode == 'true'
    ? (this.darkMode = true)
    : (this.darkMode = false);
    document.body.classList.toggle('dark', this.darkMode);
  }

  toggleDarkMode(){
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark', this.darkMode);
    if(this.darkMode) {
      localStorage.setItem('darkModeActivated', 'true');
    } else{
      localStorage.setItem('darkModeActivated', 'false');
    }
    }
  }

