import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'my-applet',
  templateUrl: './applet.component.html',
  styleUrls: [ './applet.component.css' ]
})
export class AppletComponent implements OnInit {
  name:string;
  category:string[];
  applets:any;
  appletName:string;
  cat:string[];
  ne:false;
  numi:[];
  numj:[];
  aName:string;
  list:string[];
  numCat:string[];
  len:number;

  constructor(){

  }
  ngOnInit(){
    
    this.category = [
       'Investments',
       'Operations',
       'Performance',
    ]
    this.applets = [
       {
        name: 'Performance Snapshot',
        categories: ['Performance']
      },
      {
        name: 'Commitment Widget',
        categories: ['Investments']
      },
      {
        name: 'CMS',
        categories: ['Investments', 'Performance' ]
      }
    ]
  
  }
  enableProdMode(){

  }
  filter(applet){
    console.log(applet);
    var appletName;
    if (applet!="")
    {
      for(var i=0;i<this.applets.length;i++) {
        if(this.applets[i].name.toLowerCase()==applet.toLowerCase()){
          console.log(this.applets[i].name.toLowerCase())
          console.log(applet.toLowerCase())
          this.cat=this.applets[i].categories
          this.appletName=this.applets[i].name
          console.log(this.cat)    
          console.log(applet)
          if(this.cat.length==2){
          this.len=this.cat.length-1}
          else{
            this.len=this.cat.length
          }
          return this.cat,this.appletName
        }  
      }
      console.log('no match')
      console.log(this.category)
      this.cat=[]
      this.appletName=''
      return this.cat,this.appletName
    }
    else{

      this.cat=this.category
      this.appletName=''
      return this.cat,this.appletName
    }
  }
  onClick(element){
    this.aName=''
    console.log(element)
    console.log(this.applets.length)
    if(element.toLowerCase()=='operations'){
      this.len=0
    }
    else{
    for(var i=0;i<this.applets.length;i++) {
      console.log(i)
      for(var j=0;j<this.applets[i].categories.length;j++){
        console.log(j)
        if(element.indexOf(this.applets[i].categories[j]) !== -1){
        console.log(this.applets[i].name)
        this.aName=this.aName+this.applets[i].name+','
      }
    }
  }
  
  console.log(this.aName)
  this.list=this.aName.split(',')
  console.log(this.list)
  for(var i=0;i<this.list.length;i++){
    console.log(i)
    if(this.list[i]==''){
      this.list.splice(i,1)
    }
  }
  console.log(this.list)
  this.len=this.list.length
  return this.list,this.len
  }
  }
}
