import { TestBed } from '@angular/core/testing';
import { instance } from 'ts-mockito';
import { MysqlQueryService } from '../../services/mysql-query.service';
import { MockedMysqlQueryService } from '../../testing/mocks';
import { NpcTextSearchService } from './npc-text-search.service';

describe('NpcTextSearchService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [{ provide: MysqlQueryService, useValue: instance(MockedMysqlQueryService) }],
    }),
  );

  it('should be created', () => {
    const service: NpcTextSearchService = TestBed.inject(NpcTextSearchService);
    expect(service).toBeTruthy();
  });
});
