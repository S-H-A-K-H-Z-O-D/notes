import { HttpException, Catch, ExceptionFilter, ArgumentsHost } from '@nestjs/common';

@Catch(HttpException)
export class AllExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();
    const { statusCode, message } = exception.response;
    response.status(statusCode).json({ message });
  }
}
