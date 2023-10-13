import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulartask2';
  // tagcart = [
  //   {
  //     "class" : ["","","","","text-muted","text-muted","text-muted","text-muted"],
  //     "list" : ["fa fa-check","fa fa-check","fa fa-check","fa fa-check","fa fa-times","fa fa-times","fa fa-times","fa fa-times"],
  //     "isEnable" : false,
  //     "desc" : ["Single User","5GB Storage","Unlimited Public Projects","Community Access","Unlimited Private Projects","Dedicated Phone Support",
  //     "Free Subdomain","Monthly Status Reports"],
  //     "plan" : "Free",
  //     "price" : 0
  //   },
  //   {
  //     "class" : ["","","","","","","","text-muted"],
  //     "list" : ["fa fa-check","fa fa-check","fa fa-check","fa fa-check","fa fa-check","fa fa-check","fa fa-check","fa fa-times"],
  //     "isEnable" : true,
  //     "desc" : ["50 Users","50GB Storage","Unlimited Public Projects","Community Access","Unlimited Private Projects","Dedicated Phone Support",
  //     "Free Subdomain","Monthly Status Reports"],
  //     "plan" : "Plus",
  //     "price" : 9
  //   },
  //   {
  //     "class" : ["","","","","","","",""],
  //     "list" : ["fa fa-check","fa fa-check","fa fa-check","fa fa-check","fa fa-check","fa fa-check","fa fa-check","fa fa-check"],
  //     "isEnable" : true,
  //     "desc" : ["Unlimited Users","150GB Storage","Unlimited Public Projects","Community Access","Unlimited Private Projects","Dedicated Phone Support",
  //     "Unlimited Free Subdomains","Monthly Status Reports"],
  //     "plan" : "Pro",
  //     "price" : 49
  //   }
  // ]

  tagcart = [
      {
        plan:"FREE",
        price:"0",
        features:[
          {
            name:"Single User",
            isEnable: true
          },
          {
            name:"5GB Storage",
            isEnable: true
          },
          {
            name:"Unlimited Public Projects",
            isEnable: true
          },
          {
            name:"Community Access",
            isEnable: true
          },
          {
            name:"Unlimited Private Projects",
            isEnable: false
          },
          {
            name:"Dedicated Phone Support",
            isEnable: false
          },
          {
            name:"Free Subdomain",
            isEnable: false
          },
          {
            name:"Monthly Status Reports",
            isEnable: false
          },
         ]
      },
      {
        plan:"PLUS",
        price:"9" ,
         features:[
          {
            name:"5 Users",
            isEnable: true,
            isTrue:true
          },
          {
            name:"50GB Storage",
            isEnable: true
          },
          {
            name:"Unlimited Public Projects",
            isEnable: true
          },
          {
            name:"Community Access",
            isEnable: true
          },
          {
            name:"Unlimited Private Projects",
            isEnable: true
          },
          {
            name:"Dedicated Phone Support",
            isEnable: true
          },
          {
            name:"Free Subdomain",
            isEnable: true
          },
          {
            name:"Monthly Status Reports",
            isEnable: false
          },
         ]
      },
      {
        plan:"PRO",
        price :"49" ,
         features:[
          {
            name:"Unlimited Users",
            isEnable: true,
            isTrue:true
          },
          {
            name:"150GB Storage",
            isEnable: true,
            isTrue:false
          },
          {
            name:"Unlimited Public Projects",
            isEnable: true
          },
          {
            name:"Community Access",
            isEnable: true
          },
          {
            name:"Unlimited PrivateProjects",
            isEnable: true
          },
          {
            name:"Dedicated Phone Support",
            isEnable: true
          },
          {
            name:"Unlimited Free Subdomain",
            isEnable: true
          },
          {
            name:"Monthly Status Reports",
            isEnable: true
          },
         ]
      }
  
    ]
}
