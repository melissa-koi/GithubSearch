import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  user:String[]
  constructor(private searchService:SearchService) { }

  ngOnInit(): void {
  }

  searchUser() {
    this.searchService.getData().subscribe(data => {console.log(data)}) 
  }
}

  

