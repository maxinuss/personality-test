import { IsNotEmpty, IsString } from 'class-validator';

export class PersonalityDto {
  @IsNotEmpty()
  @IsString()
    answers: string;
}
