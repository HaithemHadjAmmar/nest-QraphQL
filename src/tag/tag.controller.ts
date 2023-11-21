import { Controller, Get } from "@nestjs/common";
import { TagService } from "./tag.service";

@Controller()
export class TagController {
    constructor(private readonly tagService: TagService) {}
      
    @Get()
    findAll() {
      return['dragons', 'coffee'];
 }
}