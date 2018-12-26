import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  public comments : string[];
  
  constructor() { }

  getAllComments() : string[]{
   return this.comments = ["Hi Peter, Thank you for bringing this to our attention"
    + "I understand that you'd like a feature in Mint that would allow you to have a support for printing or saving PDF files including graphs. While we don't currently have a feature to address your need, feature requests are always reviewed and noted by our product development team. That said, we can't make any promises that your request will get implemented as we must balance customer demand with resources and objectives"
    + "Regards, Mint Lee", " I created a Windows and Mac program that allows you to import all of your Mint.com transactions to generate, print or export transaction reports, income/expense reports, comparison reports, charts and more. And I'll be adding budgeting later this year. You can base these reports on your TAGS, CATEGORIES, ACCOUNTS, PAYEES and more. Visit https://minttoreport.com for more information" , "I made it simple if you don't want to deal with learning how to use a spreadsheet this year."];
  }
}
