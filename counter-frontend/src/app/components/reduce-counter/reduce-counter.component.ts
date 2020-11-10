import { Component, OnInit } from "@angular/core";
import { CounterService } from "src/app/services/counter.service";

@Component({
  selector: "app-reduce-counter",
  templateUrl: "./reduce-counter.component.html",
  styleUrls: ["./reduce-counter.component.css"],
})
export class ReduceCounterComponent implements OnInit {
  counterValue = 0;
  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    this.getCounter(1);
  }

  getCounter(id): void {
    this.counterService.get(id).subscribe(
      (data) => {
        this.counterValue = data.value;
      },
      (error) => {
        console.log("get counter error");
      }
    );
  }

  reduceCounter(): void {
    // currently let's reduce the counter by 1
    const data = { value: this.counterValue - 1 };

    this.counterService.update(1, data).subscribe(
      (response) => {
        this.counterValue = response.value;
        console.log("reduce counter", response);
      },
      (error) => {
        console.log("reduce counter error", error);
      }
    );
  }
}
