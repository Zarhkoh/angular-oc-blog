import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent { 
  posts = [
    {
     title: `test1`,
     content: `otketpo ekeprokterpot keklg,re lk,e`,
     loveIts: 4,
     created_at: new Date()
     },
     {
    title: `titre2`,
    content: `VROUM VROUM LA VOITURE`,
    loveIts: 0,
    created_at: new Date()
      },
      {
      title: `titre3`,
    content: `tpooykrt porky porkjty rpojyr p^y porkly rpky rpoky rpky rpoykr tok`,
    loveIts: -5,
    created_at: new Date()
      },
    ]

  
  title = 'mon SkyBlog de Pauvre';
}