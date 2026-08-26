import {
  Controller,
  Get,
} from "@nestjs/common";

import { StoresService } from "./stores.service";
import { Public } from "../auth/public.decorator";

@Public()
@Controller("stores")
export class StoresController {
  constructor(
    private readonly storesService:
      StoresService,
  ) {}

  @Get("trade-mediators")
  getTradeMediators() {
    return this.storesService.getTradeMediators();
  }
}
