import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ReduceCounterComponent } from "./components/reduce-counter/reduce-counter.component";

const routes: Routes = [
  { path: "", redirectTo: "counter", pathMatch: "full" },
  { path: "counter", component: ReduceCounterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
