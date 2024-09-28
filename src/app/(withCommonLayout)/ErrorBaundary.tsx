"use client";
import { Component, ReactNode } from "react";

interface TErrorBaundaryProps {
  fallback: ReactNode;
  children: ReactNode;
}

interface TErrorBaundaryState {
  hasError: boolean;
}

class ErrorBaundary extends Component<
  TErrorBaundaryProps,
  TErrorBaundaryState
> {
  constructor(props: TErrorBaundaryProps) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default ErrorBaundary;
