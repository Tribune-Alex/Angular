import { Component } from '@angular/core';
import { student } from '../models/student';
import { CommonModule} from '@angular/common';
import { faclt } from '../models/faculty';

@Component({
  selector: 'app-main',
  imports: [CommonModule],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {
  public students:student[]=[
    {
      ID:1,
      FullName:"John Smith",
      Age:19,
      Faculty:"IT",
      Course:1,
      AvgGrade:95,
      Grants:true,
      Active:true
    },
    {
      ID:2,
      FullName:"Ross Geller",
      Age:22,
      Faculty:"Geology",
      Course:3,
      AvgGrade:99,
      Grants:true,
      Active:false
    },
    {
      ID:3,
      FullName:"Jane Rischar",
      Age:21,
      Faculty:"Medical",
      Course:2,
      AvgGrade:87,
      Grants:false,
      Active:true
    },
    {
      ID:4,
      FullName:"Michael Novak",
      Age:18,
      Faculty:"Legal",
      Course:1,
      AvgGrade:97,
      Grants:true,
      Active:true
    },
    {
      ID:5,
      FullName:"Joel Madden",
      Age:20,
      Faculty:"Music",
      Course:2,
      AvgGrade:93,
      Grants:true,
      Active:true
    },
    {
      ID:7,
      FullName:"Alain Dufrein",
      Age:21,
      Faculty:"Psycology",
      Course:3,
      AvgGrade:75,
      Grants:false,
      Active:true
    },
    {
      ID:8,
      FullName:"Caster Troy",
      Age:22,
      Faculty:"Chemistry",
      Course:3,
      AvgGrade:91,
      Grants:true,
      Active:true
    },
    {
      ID:9,
      FullName:"William Tanner",
      Age:19,
      Faculty:"UFO",
      Course:2,
      AvgGrade:88,
      Grants:false,
      Active:false
    },{
      ID:10,
      FullName:"Stephen McClaud",
      Age:22,
      Faculty:"History",
      Course:4,
      AvgGrade:75,
      Grants:false,
      Active:true
    },
    {
      ID:11,
      FullName:"Tony Soprano",
      Age:21,
      Faculty:"Arts",
      Course:3,
      AvgGrade:68,
      Grants:false,
      Active:false
    }
  ]


  public faculty:faclt[]=[
    {
      ID:1,
      Title:"IT",
      Price:7000,
      Duration:4
    },
    {
      ID:2,
      Title:"Geology",
      Price:4000,
      Duration:4
    },
    {
      ID:3,
      Title:"Medical",
      Price:8000,
      Duration:10
    },
    {
      ID:4,
      Title:"Legal",
      Price:3500,
      Duration:5
    },
    {
      ID:5,
      Title:"Music",
      Price:4500,
      Duration:7
    },
    {
      ID:6,
      Title:"Psycology",
      Price:3500,
      Duration:4
    },
    {
      ID:7,
      Title:"Chemistry",
      Price:5000,
      Duration:6
    },
    {
      ID:8,
      Title:"UFO",
      Price:4200,
      Duration:4
    },
    {
      ID:9,
      Title:"History",
      Price:3600,
      Duration:4
    },
    {
      ID:10,
      Title:"Art",
      Price:6700,
      Duration:4
    }
  ]
}
