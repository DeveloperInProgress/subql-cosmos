// Copyright 2020-2022 OnFinality Limited authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Module } from '@nestjs/common';
import {
  DbModule,
  StoreService,
  PoiService,
  MmrService,
} from '@subql/node-core';
import { SubqueryProject } from '../configure/SubqueryProject';
import { ApiService } from './api.service';
import { DictionaryService } from './dictionary.service';
import { DsProcessorService } from './ds-processor.service';
import { DynamicDsService } from './dynamic-ds.service';
import { IndexerManager } from './indexer.manager';
import { ProjectService } from './project.service';
import { SandboxService } from './sandbox.service';
import { WorkerService } from './worker/worker.service';

@Module({
  imports: [DbModule.forFeature(['Subquery'])],
  providers: [
    IndexerManager,
    StoreService,
    {
      provide: ApiService,
      useFactory: async (project: SubqueryProject) => {
        const apiService = new ApiService(project);
        await apiService.init();
        return apiService;
      },
      inject: [SubqueryProject],
    },
    DictionaryService,
    SandboxService,
    DsProcessorService,
    DynamicDsService,
    PoiService,
    MmrService,
    ProjectService,
    WorkerService,
  ],
  exports: [StoreService, MmrService],
})
export class IndexerModule {}
