import { Component, Input } from '@angular/core';
import { Player } from '../services/player.interface';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {
  @Input() player!: Player;
}
