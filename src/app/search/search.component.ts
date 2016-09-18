import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { SearchService } from '../search.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchService]
})

export class SearchComponent implements OnInit {
  searchTags: string[] = [];
  selectedSchool: string;

  constructor() { }

  ngOnInit() {

  }
  selectSchool(school: string): void {
    this.selectedSchool = school;
  }
}
