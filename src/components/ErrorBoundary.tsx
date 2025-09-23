import React from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorId: string;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  private retryTimeoutId: number | null = null;

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { 
      hasError: false,
      errorId: ""
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { 
      hasError: true, 
      error,
      errorId: Date.now().toString()
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Only log in development
    if (process.env.NODE_ENV === 'development') {
      console.error("ErrorBoundary caught an error:", error, errorInfo);
    }
  }

  componentWillUnmount() {
    if (this.retryTimeoutId) {
      clearTimeout(this.retryTimeoutId);
    }
  }

  retry = () => {
    this.setState({ 
      hasError: false, 
      error: undefined,
      errorId: ""
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-center p-8 max-w-md">
            <div className="w-16 h-16 bg-gradient-to-r from-[#00203f] to-[#e79a63] rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">E</span>
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-4">
              حدث خطأ ما
            </h1>
            <p className="text-muted-foreground mb-6">
              عذراً، حدث خطأ غير متوقع. يرجى تحديث الصفحة أو المحاولة مرة أخرى لاحقاً.
            </p>
            <div className="flex flex-col gap-3">
              <button
                onClick={this.retry}
                className="bg-[#e79a63] hover:bg-[#d68951] text-white px-6 py-3 rounded-lg transition-colors duration-300"
              >
                المحاولة مرة أخرى
              </button>
              <button
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.location.reload();
                  }
                }}
                className="bg-transparent border border-[#e79a63] text-[#e79a63] hover:bg-[#e79a63] hover:text-white px-6 py-3 rounded-lg transition-colors duration-300"
              >
                تحديث الصفحة
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}