import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  user:String;
  githubProfile:any;
  githubRepos:any[];
  constructor(private searchService:SearchService) { }

  ngOnInit(): void {
  }

  searchUser() {
    if(this.user ===undefined || this.user == '') {
      alert("Please enter a user name")
    }else{
      this.searchService.getProfile(this.user).subscribe((data) => {this.githubProfile = data});
      this.searchService.getRepos(this.user).subscribe((data) => {this.githubRepos = data}) 
   }
    }
    
}