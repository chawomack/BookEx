import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent implements OnInit {
  school: string;
  advancedHidden: boolean = true;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.school = params['id'].replace(/-/g, " ");
    });
  }

  showAdvanced(): void {
    this.advancedHidden = !this.advancedHidden;
  }

}
