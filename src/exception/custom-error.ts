class InvalidParamsError extends Error {
    private status: number;
    constructor(message:string, status:number) {
        super(message);
        this.status = status || 400;
        this.name = 'InvalidParamsError';
        if (!message) this.message = '요청한 데이터 형식이 올바르지 않습니다.';
    }
}
export default InvalidParamsError;