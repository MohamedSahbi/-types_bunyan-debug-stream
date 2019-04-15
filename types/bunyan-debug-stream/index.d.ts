// Type definitions for bunyan-debug-stream 2.0
// Project: https://github.com/benbria/bunyan-debug-stream#readme
// Definitions by: My Self <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = bunyan_debug_stream;

declare function bunyan_debug_stream(options: any): any;

declare namespace bunyan_debug_stream {
    const prototype: {
    };

    namespace serializers {
        function err(err: any): any;

        function req(req: any): any;

        function res(res: any): any;

        namespace err {
            const prototype: {
            };

        }

        namespace req {
            const prototype: {
            };

        }

        namespace res {
            const prototype: {
            };

        }

    }

    namespace stdStringifiers {
        function err(err: any, arg: any): any;

        function req(req: any, arg: any): any;

        namespace err {
            const prototype: {
            };

        }

        namespace req {
            const prototype: {
            };

        }

    }

}

