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
  num:string[];
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
  remove(){
      document.getElementById('list').innerHTML = '';
  }

  filter(applet){
    console.log(applet);
    console.log('list');
    console.log(this.list);
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
          if(applet.toLowerCase()=='cms'){
            this.num=['1','1']
          }
           if(applet.toLowerCase()=='performance snapshot'){
            this.num=['1']
          }
          if(applet.toLowerCase()=='commitment widget'){
            this.num=['1']
          }
          return this.cat,this.appletName,this.num,this.list
        }  
      }
      console.log('no match')
      console.log(this.category)
      this.cat=this.category
      this.appletName=''
      this.num=['0','0','0']
      return this.cat,this.appletName
    }
    else{
      this.num=['2','0','2']
      this.cat=this.category
      this.appletName=''
      return this.cat,this.appletName
    }
  }
  
  onClick(element,applet){
    if(applet == ''){
    this.aName=''
    console.log(element)
    console.log(this.applets.length)
    for(var i=0;i<this.applets.length;i++) {
      console.log(i)
      for(var j=0;j<this.applets[i].categories.length;j++){
        console.log(j)
        if(element.indexOf(this.applets[i].categories[j]) !== -1){
          console.log('find it')
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
  console.log(this.len)
  return this.list,this.len,true
  }
  else{
    return false
  }
  }
}
