import { Component, OnInit } from '@angular/core';
import {Musician} from "../Musician";
import {MusicianService} from "../musician.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  musicians: Musician[] = []

  constructor(private musicianService: MusicianService) { }

  ngOnInit(): void {
    this.getMusicians();
  }

  getMusicians(): void {
    this.musicianService.getMusicians().subscribe(musicians => this.musicians = musicians.slice(1,5));
  }

}
