import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() appearance: any = 'fill';
  @Input() label: string = 'label';
  @Input() type: string = 'message';
  @Input() placeholder: string = 'placeholder';
  @Input() hint?: string;
  @Input() icon: string = 'sentiment_satisfied_alt';
  @Input() iconVisibility: string = 'block';
  constructor() {}

  ngOnInit(): void {}
}
