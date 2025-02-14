import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsString } from 'class-validator';
import { MessageTemplate } from '../types/message-template';

export class SendMessageRequestDto {
  @ApiProperty({
    description: 'The target e-mail',
    required: true,
    example: 'diego@vidayfortaleza.com',
  })
  @IsString()
  @IsEmail()
  to: string;

  @ApiProperty({
    description: 'The subject of the mail',
    required: true,
    example: 'CEMEVYF - Nueva Cotización de Laboratorio! ✔',
  })
  @IsString()
  subject: string;

  @ApiProperty({
    description: 'The message template',
    required: true,
    example: MessageTemplate.HEALTH_ORDER_QUOTATION_CLIENT,
    default: MessageTemplate.HEALTH_ORDER_QUOTATION_CLIENT,
  })
  @IsEnum(MessageTemplate)
  template: MessageTemplate;

  @ApiProperty({
    description: 'The values to be parsed in mail',
    required: true,
    example: {
      clientFirstName: 'Diego',
      clientLastName: 'Di Rossi',
      createdAt: (new Date()).toLocaleString(),
      quotationId: 100,
      totalAmount: '$ 21.000,50',
      items: [{
        code: 'NPK',
        description: 'SODIO, POTASIO Y CALCIO EN SANGRE',
      },
      {
        code: 'ABI',
        description: 'ACIDOS BILIARES',
      }],
    },
  })
  context: any;
}
