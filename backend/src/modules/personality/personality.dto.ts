import { IsNotEmpty, IsNumber } from 'class-validator';

export class PersonalityDto {
  @IsNotEmpty()
  @IsNumber()
    answer1: number;

  @IsNotEmpty()
  @IsNumber()
    answer2: number;

  @IsNotEmpty()
  @IsNumber()
    answer3: number;

  @IsNotEmpty()
  @IsNumber()
    answer4: number;
}
