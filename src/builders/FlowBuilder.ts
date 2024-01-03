import {
  Flow,
  FlowParameter,
  FlowParameterFlowActionPayload
} from '@vyrnnstudios/messages/data/Interactive';

export class FlowBuilder {
  private flow: Flow;

  constructor() {
    this.flow = new Flow();
  }

  public static newBuilder(): FlowBuilder {
    return new FlowBuilder();
  }

  public static builder(): FlowBuilder {
    return FlowBuilder.newBuilder();
  }

  public append(flow: Flow): FlowBuilder {
    this.flow = flow;

    return this;
  }

  public name(name: string): FlowBuilder {
    this.flow.name = name;

    return this;
  }

  public parameters(parameters: FlowParameter | ((builder: FlowParameterBuilder) => void)): FlowBuilder {
    const flowParameterBuilder = FlowParameterBuilder.newBuilder();

    if (parameters instanceof FlowParameter) {
      flowParameterBuilder.append(parameters);
    }

    if (parameters instanceof Function) {
      parameters(flowParameterBuilder);
    }

    this.flow.parameters = flowParameterBuilder.build();

    return this;
  }

  public build(): Flow {
    return this.flow;
  }
}

export class FlowParameterBuilder {
  private flowParameter: FlowParameter;

  constructor() {
    this.flowParameter = new FlowParameter();
  }

  public static newBuilder(): FlowParameterBuilder {
    return new FlowParameterBuilder();
  }

  public static builder(): FlowParameterBuilder {
    return FlowParameterBuilder.newBuilder();
  }

  public append(flowParameter: FlowParameter): FlowParameterBuilder {
    this.flowParameter = flowParameter;

    return this;
  }

  public flowMessageVersion(flowMessageVersion: string): FlowParameterBuilder {
    this.flowParameter.flowMessageVersion = flowMessageVersion;

    return this;
  }

  public flowToken(flowToken: string): FlowParameterBuilder {
    this.flowParameter.flowToken = flowToken;

    return this;
  }

  public flowId(flowId: string): FlowParameterBuilder {
    this.flowParameter.flowId = flowId;

    return this;
  }

  public flowCTA(flowCTA: string): FlowParameterBuilder {
    this.flowParameter.flowCTA = flowCTA;

    return this;
  }

  public flowAction(flowAction: string): FlowParameterBuilder {
    this.flowParameter.flowAction = flowAction;

    return this;
  }

  public flowActionPayload(flowActionPayload: FlowParameterFlowActionPayload | ((builder: FlowParameterFlowActionPayloadBuilder) => void)): FlowParameterBuilder {
    const flowParameterFlowActionPayloadBuilder = FlowParameterFlowActionPayloadBuilder.newBuilder();

    if (flowActionPayload instanceof FlowParameterFlowActionPayload) {
      flowParameterFlowActionPayloadBuilder.append(flowActionPayload);
    }

    if (flowActionPayload instanceof Function) {
      flowActionPayload(flowParameterFlowActionPayloadBuilder);
    }

    this.flowParameter.flowActionPayload = flowParameterFlowActionPayloadBuilder.build();

    return this;
  }

  public build(): FlowParameter {
    return this.flowParameter;
  }
}

export class FlowParameterFlowActionPayloadBuilder {
  private flowParameterFlowActionPayload: FlowParameterFlowActionPayload;

  constructor() {
    this.flowParameterFlowActionPayload = new FlowParameterFlowActionPayload();
  }

  public static newBuilder(): FlowParameterFlowActionPayloadBuilder {
    return new FlowParameterFlowActionPayloadBuilder();
  }

  public static builder(): FlowParameterFlowActionPayloadBuilder {
    return FlowParameterFlowActionPayloadBuilder.newBuilder();
  }

  public append(flowParameterFlowActionPayload: FlowParameterFlowActionPayload): FlowParameterFlowActionPayloadBuilder {
    this.flowParameterFlowActionPayload = flowParameterFlowActionPayload;

    return this;
  }

  public screen(screen: string): FlowParameterFlowActionPayloadBuilder {
    this.flowParameterFlowActionPayload.screen = screen;

    return this;
  }

  public data(data: Record<string, unknown> | ((builder: Record<string, unknown>) => void)): FlowParameterFlowActionPayloadBuilder {
    const record: Record<string, unknown> = {};

    if (data instanceof Object) {
      Object.assign(record, data);
    }

    if (data instanceof Function) {
      data(record);
    }

    this.flowParameterFlowActionPayload.data = record;

    return this;
  }

  public build(): FlowParameterFlowActionPayload {
    return this.flowParameterFlowActionPayload;
  }
}
