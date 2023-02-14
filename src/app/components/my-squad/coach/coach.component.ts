import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/core/services/storage.service';
import { Coach } from '../../../core/types/coach';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.scss']
})
export class CoachComponent implements OnInit {

  public coach: Coach;

  constructor(public storageService: StorageService) { }

  ngOnInit() {
    this.storageService.coachChange$.subscribe((coach) => {
      this.coach = coach;
    })
  }

}
