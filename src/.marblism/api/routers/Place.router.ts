/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        create: procedure.input($Schema.PlaceInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).place.create(input as any))),

        delete: procedure.input($Schema.PlaceInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).place.delete(input as any))),

        findFirst: procedure.input($Schema.PlaceInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).place.findFirst(input as any))),

        findMany: procedure.input($Schema.PlaceInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).place.findMany(input as any))),

        findUnique: procedure.input($Schema.PlaceInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).place.findUnique(input as any))),

        update: procedure.input($Schema.PlaceInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).place.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    create: {

        useMutation: <T extends Prisma.PlaceCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PlaceCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PlaceGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PlaceGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PlaceCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PlaceCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PlaceGetPayload<T>, Context>) => Promise<Prisma.PlaceGetPayload<T>>
            };

    };
    delete: {

        useMutation: <T extends Prisma.PlaceDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PlaceDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PlaceGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PlaceGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PlaceDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PlaceDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PlaceGetPayload<T>, Context>) => Promise<Prisma.PlaceGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.PlaceFindFirstArgs, TData = Prisma.PlaceGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.PlaceFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PlaceGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PlaceFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PlaceFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PlaceGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PlaceGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.PlaceFindManyArgs, TData = Array<Prisma.PlaceGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.PlaceFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.PlaceGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PlaceFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PlaceFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.PlaceGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.PlaceGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.PlaceFindUniqueArgs, TData = Prisma.PlaceGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.PlaceFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PlaceGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PlaceFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PlaceFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PlaceGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PlaceGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    update: {

        useMutation: <T extends Prisma.PlaceUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PlaceUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PlaceGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PlaceGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PlaceUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PlaceUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PlaceGetPayload<T>, Context>) => Promise<Prisma.PlaceGetPayload<T>>
            };

    };
}
