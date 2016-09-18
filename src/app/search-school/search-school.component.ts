import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-school',
  templateUrl: './search-school.component.html',
  styleUrls: ['./search-school.component.css'],
  providers: [SearchService]
})
export class SearchSchoolComponent implements OnInit {
  schools: Observable<string[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private router: Router,
    private searchService: SearchService) { }

  ngOnInit() {
    this.schools = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term ? this.searchService.search(term) : Observable.of<string[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<string[]>([]);
      });
  }
  search(term: string): void {
    this.searchTerms.next(term);
  }

  selectSchool(school: string): void {
    this.searchTerms.unsubscribe();
    this.router.navigate(['/', school.replace(/ /g, "-")]);
  }

}
